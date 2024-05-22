import { Search, SquareMenu, UsersRound, BarChart } from "lucide-react";
import logo from "../assets/logo.png";
import Button from "../components/Button";

const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <SquareMenu />
        </Button>
        <a href="/">
          <img src={logo} alt="logo" className="h-36" />
        </a>
        <Button size="icon" variant="ghost">
          <Search />
        </Button>
        <Button size="icon" variant="ghost">
          <UsersRound />
        </Button>
        <Button size="icon" variant="ghost">
          <BarChart />
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default PageHeader;
