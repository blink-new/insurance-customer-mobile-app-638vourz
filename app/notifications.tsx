
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Bell, ArrowRight, AlertCircle } from 'lucide-react-native';

export default function Notifications() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
      </View>
      
      <View style={styles.content}>
        {[
          {
            title: 'Policy Renewal Reminder',
            message: 'Your car insurance policy expires in 30 days',
            time: '2 hours ago',
            type: 'reminder',
          },
          {
            title: 'Payment Successful',
            message: 'Health insurance premium payment received',
            time: '1 day ago',
            type: 'payment',
          },
          {
            title: 'New Policy Document',
            message: 'Travel insurance policy document is ready',
            time: '2 days ago',
            type: 'document',
          },
        ].map((notification, index) => (
          <View key={index} style={styles.notificationCard}>
            <View style={styles.notificationIcon}>
              {notification.type === 'reminder' ? (
                <Bell size={20} color="#8B5CF6" />
              ) : notification.type === 'payment' ? (
                <ArrowRight size={20} color="#10B981" />
              ) : (
                <AlertCircle size={20} color="#3B82F6" />
              )}
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#1E3A8A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    padding: 20,
  },
  notificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#94A3B8',
  },
});