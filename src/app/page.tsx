import Background from "./components/Background";
import Burger from "./components/Burger";
import Task from "./components/Task";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-0 lg:p-10 md:p-10 sm:p-7 relative">
      {/* Бургер меню для выбора предмета */}
      <Burger />
      {/* Фон для всего сайта */}
      <Background />
      {/* Содержимое страницы */}
      <Task />
    </div>
  );
}
