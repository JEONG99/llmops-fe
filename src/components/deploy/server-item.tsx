import { Checkbox } from "@/components/ui/checkbox";
import { Server } from "@/types";

interface ServerItemProps {
  server: Server;
  toggleServer: (id: number) => void;
  checked: boolean;
}

const ServerItem = ({ server, toggleServer, checked }: ServerItemProps) => {
  return (
    <div className="flex items-center pl-6 h-[60px] border-b border-blue/20">
      <div className="flex justify-start items-center w-[350px]">
        <span>{server.title}</span>
      </div>
      <div className="flex justify-center items-center w-[120px]">
        <span className="text-blue">{server.gpu_id}</span>
      </div>
      <div className="flex justify-center items-center w-[220px]">
        <span className="text-sm">{server.deploy_model.name}</span>
      </div>
      <div className="flex justify-center items-center w-[130px]">
        <span className="text-sm">{server.service}</span>
      </div>
      <div className="flex justify-center items-center flex-1">
        <Checkbox
          checked={checked}
          onCheckedChange={() => toggleServer(server.id)}
          className="size-5 border-blue data-[state=checked]:bg-blue"
        />
      </div>
    </div>
  );
};

export default ServerItem;
