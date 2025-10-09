import { View, Text, Button } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function AppointmentScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Appointment {id}</Text>
      <Button title="Go to Client (A)" onPress={() => router.push('/(tabs)/clients/client/A')} />
    </View>
  );
}
