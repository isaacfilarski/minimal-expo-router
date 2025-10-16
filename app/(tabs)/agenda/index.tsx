import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function AgendaScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Agenda Screen</Text>
      <Button title="Go to Appointment (1)" onPress={() => router.push('/(tabs)/agenda/appointment/1',  { withAnchor: true })} />
      <Button title="Go to Clients Tab" onPress={() => router.push('/(tabs)/clients', { withAnchor: true })} />
    </View>
  );
}
