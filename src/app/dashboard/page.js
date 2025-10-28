'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/dashboard.css';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [dietData, setDietData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/auth/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);

    fetchDietData(parsedUser.email);
  }, [router]);

  const fetchDietData = async (email) => {
    try {
      const response = await fetch(`/api/diet/get?email=${email}`);
      const data = await response.json();
      setDietData(data.dietData);
    } catch (err) {
      console.error('Failed to fetch diet data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/auth/login');
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {user?.name}!</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>

      <div className="dashboard-content">
        <div className="info-card">
          <h2>Your Profile</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{user?.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Age:</span>
              <span className="info-value">{dietData?.age} years</span>
            </div>
            <div className="info-item">
              <span className="info-label">Weight:</span>
              <span className="info-value">{dietData?.weight} kg</span>
            </div>
            <div className="info-item">
              <span className="info-label">Height:</span>
              <span className="info-value">{dietData?.height} cm</span>
            </div>
            <div className="info-item">
              <span className="info-label">Gender:</span>
              <span className="info-value">{dietData?.gender}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Activity:</span>
              <span className="info-value">{dietData?.activityLevel}</span>
            </div>
          </div>
        </div>

        <div className="info-card">
          <h2>Health Goals</h2>
          <div className="goal-box">
            <p><strong>Primary Goal:</strong> {dietData?.goal}</p>
            {dietData?.dietaryRestrictions && (
              <p><strong>Dietary Restrictions:</strong> {dietData.dietaryRestrictions}</p>
            )}
            {dietData?.medicalConditions && (
              <p><strong>Medical Notes:</strong> {dietData.medicalConditions}</p>
            )}
          </div>
        </div>

        <div className="info-card">
          <h2>Your Diet Plan</h2>
          <p className="coming-soon">🎯 Personalized meal plan coming soon based on your profile!</p>
        </div>
      </div>
    </div>
  );
}
