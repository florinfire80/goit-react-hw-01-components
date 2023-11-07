import Profile from './Profile';
import Statistics from './Statistics';
import Friends from './Friends';
import Transactions from './Transactions/Transactions';

export const App = () => {
  return (
    <main>
      <Profile />
      <Statistics />
      <Friends />
      <Transactions />
    </main>
  );
};
