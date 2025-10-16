import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ClientsScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Clients Screen</Text>
      <Button title="Go to Client (A)" onPress={() => router.push('/(tabs)/clients/client/A' , { withAnchor: true })} />
      <Button title="Go to Agenda Tab" onPress={() => router.push('/(tabs)/agenda' , { withAnchor: true })} />
    </View>
  );
}
