import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs backBehavior="history">
      <Tabs.Screen name="agenda" options={{ title: 'Agenda' }} />
      <Tabs.Screen name="clients" options={{ title: 'Clients' }} />
    </Tabs>
  );
}
