// src/utils/notifications.ts
import { getCurrentProgress } from './pregnancyState';

/**
 * Evaluates whether the user has advanced to a new pregnancy week compared to the stored value.
 * Gracefully requests browser permission and delivers a native milestone notification.
 */
export function checkAndTriggerWeeklyNotification(): void {
  // SSR or compatibility checks
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return;
  }

  const progress = getCurrentProgress();
  // Exit if the user has not initialized their pregnancy due date calculations yet
  if (!progress) return;

  // Gestational week is index offset: 14 weeks completed means entering Week 15
  const currentWeek = progress.week + 1;

  const lastNotifiedStr = localStorage.getItem('last_notified_week');
  const lastNotifiedWeek = lastNotifiedStr ? parseInt(lastNotifiedStr, 10) : 0;

  // Ensure we don't trigger notification for already-notified milestone weeks
  if (currentWeek <= lastNotifiedWeek) {
    return;
  }

  const title = `Welcome to Week ${currentWeek}! 🎉`;
  const options: NotificationOptions = {
    body: `Tap to see your baby's size comparison, development facts, and maternal checklists.`,
    icon: '/favicon.svg',
    badge: '/favicon.svg',
    tag: 'weekly-pregnancy-milestone',
    requireInteraction: false
  };

  const sendNotification = () => {
    try {
      const notification = new Notification(title, options);
      
      // Persist notified week to localStorage
      localStorage.setItem('last_notified_week', currentWeek.toString());

      notification.onclick = (e) => {
        e.preventDefault();
        window.location.href = `/week/${currentWeek}`;
        window.focus();
        notification.close();
      };
    } catch (err) {
      console.error('Milestone notification creation failed:', err);
    }
  };

  if (Notification.permission === 'granted') {
    sendNotification();
  } else if (Notification.permission !== 'denied') {
    // Request permission from user
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        sendNotification();
      }
    });
  }
}
