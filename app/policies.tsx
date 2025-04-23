
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Shield } from 'lucide-react-native';

export default function Policies() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Policies</Text>
      </View>
      
      <View style={styles.content}>
        {[
          { type: 'Car Insurance', number: 'POL123456', expiry: 'Dec 2024', status: 'Active' },
          { type: 'Health Insurance', number: 'POL789012', expiry: 'Mar 2025', status: 'Active' },
          { type: 'Travel Insurance', number: 'POL345678', expiry: 'Jan 2024', status: 'Expired' },
        ].map((policy, index) => (
          <View key={index} style={styles.policyCard}>
            <View style={styles.policyHeader}>
              <Shield size={24} color="#1E3A8A" />
              <View style={styles.policyHeaderText}>
                <Text style={styles.policyType}>{policy.type}</Text>
                <Text style={[
                  styles.policyStatus,
                  { color: policy.status === 'Active' ? '#10B981' : '#EF4444' }
                ]}>
                  {policy.status}
                </Text>
              </View>
            </View>
            <View style={styles.policyDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Policy Number</Text>
                <Text style={styles.detailValue}>{policy.number}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Expiry Date</Text>
                <Text style={styles.detailValue}>{policy.expiry}</Text>
              </View>
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
  policyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  policyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  policyHeaderText: {
    marginLeft: 12,
    flex: 1,
  },
  policyType: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
  },
  policyStatus: {
    fontSize: 14,
    marginTop: 2,
  },
  policyDetails: {
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#64748B',
  },
  detailValue: {
    fontSize: 14,
    color: '#1E293B',
    fontWeight: '500',
  },
});