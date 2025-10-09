import { View, Text, Button } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function ClientScreen() {
  const router = useRouter();
  const { clientId } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Client {clientId}</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
