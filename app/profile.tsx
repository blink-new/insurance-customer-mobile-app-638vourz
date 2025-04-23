
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { User, Settings, FileText, Phone, Mail, LogOut } from 'lucide-react-native';

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <User size={40} color="#1E3A8A" />
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <View style={styles.card}>
            <View style={styles.row}>
              <Mail size={20} color="#64748B" />
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>john.doe@example.com</Text>
            </View>
            <View style={styles.row}>
              <Phone size={20} color="#64748B" />
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.value}>+1 234 567 8900</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.card}>
            {[
              { icon: FileText, label: 'My Documents' },
              { icon: Settings, label: 'Settings' },
              { icon: LogOut, label: 'Logout' },
            ].map((item, index) => (
              <Pressable key={index} style={styles.actionRow}>
                <View style={styles.actionIcon}>
                  <item.icon size={20} color="#1E3A8A" />
                </View>
                <Text style={styles.actionLabel}>{item.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
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
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#94A3B8',
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  label: {
    fontSize: 14,
    color: '#64748B',
    marginLeft: 12,
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '500',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  actionLabel: {
    fontSize: 16,
    color: '#1E293B',
    flex: 1,
  },
});