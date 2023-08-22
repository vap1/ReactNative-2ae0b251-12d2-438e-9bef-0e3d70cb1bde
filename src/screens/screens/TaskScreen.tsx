
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TaskDetails, UserRegistrationResponse } from '../api/types';
import { getTasks } from '../api/api';

const TaskScreen: React.FC = () => {
  const [tasks, setTasks] = useState<TaskDetails[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response: UserRegistrationResponse = await getTasks();
      if (response.success) {
        setTasks(response.tasks);
      } else {
        console.log('Error fetching tasks:', response.errorMessage);
      }
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  const renderTaskItem = ({ item }: { item: TaskDetails }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      {/* Render other task details */}
    </View>
  );

  return (
    <View>
      <Text>Task Screen</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TaskScreen;