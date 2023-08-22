
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TaskDetails, UserRegistrationResponse } from '../api/types'; // Import the API types

interface TaskListProps {
  userId: string;
}

const TaskList: React.FC<TaskListProps> = ({ userId }) => {
  const [tasks, setTasks] = useState<TaskDetails[]>([]);

  useEffect(() => {
    // Fetch tasks from the backend API
    const fetchTasks = async () => {
      try {
        const response: UserRegistrationResponse = await fetchTasksApi(userId);
        if (response.success) {
          setTasks(response.tasks);
        } else {
          console.error(response.errorMessage);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [userId]);

  const renderTaskItem = ({ item }: { item: TaskDetails }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      {/* Render other task details */}
    </View>
  );

  return (
    <View>
      <Text>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TaskList;