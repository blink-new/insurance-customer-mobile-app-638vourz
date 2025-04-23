
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Shield, Car, Bike, Plane, Heart } from 'lucide-react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome back,</Text>
        <Text style={styles.name}>John Doe</Text>
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionGrid}>
          {[
            { icon: Car, label: 'Car', color: '#3B82F6' },
            { icon: Bike, label: 'Bike', color: '#10B981' },
            { icon: Heart, label: 'Health', color: '#EF4444' },
            { icon: Plane, label: 'Travel', color: '#8B5CF6' },
          ].map((item, index) => (
            <Pressable key={index} style={styles.actionItem}>
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <item.icon size={24} color="#FFFFFF" />
              </View>
              <Text style={styles.actionLabel}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.activePolicies}>
        <Text style={styles.sectionTitle}>Active Policies</Text>
        {[
          { type: 'Car Insurance', number: 'POL123456', expiry: 'Dec 2024' },
          { type: 'Health Insurance', number: 'POL789012', expiry: 'Mar 2025' },
        ].map((policy, index) => (
          <Pressable key={index} style={styles.policyCard}>
            <Shield size={24} color="#1E3A8A" />
            <View style={styles.policyInfo}>
              <Text style={styles.policyType}>{policy.type}</Text>
              <Text style={styles.policyNumber}>{policy.number}</Text>
              <Text style={styles.policyExpiry}>Expires: {policy.expiry}</Text>
            </View>
          </Pressable>
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
  greeting: {
    fontSize: 16,
    color: '#94A3B8',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 4,
  },
  quickActions: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  actionItem: {
    width: '22%',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 12,
    color: '#475569',
    textAlign: 'center',
  },
  activePolicies: {
    padding: 20,
  },
  policyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  policyInfo: {
    marginLeft: 16,
  },
  policyType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  policyNumber: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 2,
  },
  policyExpiry: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
  },
});