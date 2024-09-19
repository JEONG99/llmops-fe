import StatusIcon from "@/components/model-managing/status-icon";
import TagIcon from "@/components/model-managing/tag-icon";
import SearchInput from "@/components/search-input";
import { MODEL_LIST } from "@/lib/const";
import { Model } from "@/types";
import { createLazyFileRoute } from "@tanstack/react-router";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

export const Route = createLazyFileRoute("/_layout/")({
  component: ModelManagingPage,
});

const columns: ColumnDef<Model>[] = [
  {
    accessorKey: "name",
    header: ({}) => (
      <div>
        <span className="text-gray-70 font-normal">모델명</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex justify-between">
        <span>{row.getValue("name")}</span>
        <button>
          <img src="/icon/copy-icon.svg" alt="" className="size-5" />
        </button>
      </div>
    ),
    size: 240,
  },
  {
    accessorKey: "base_model",
    header: ({}) => (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <span className="text-gray-70 font-normal">베이스 모델</span>
        <img src="/icon/sort-icon.svg" alt="" className="size-6" />
      </div>
    ),
    cell: ({ row }) => <div>{row.getValue("base_model")}</div>,
    size: 180,
  },
  {
    accessorKey: "status",
    header: ({}) => (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <span className="text-gray-70 font-normal">상태</span>
        <img src="/icon/sort-icon.svg" alt="" className="size-6" />
      </div>
    ),
    cell: ({ row }) => <StatusIcon status={row.getValue("status")} />,
    size: 134,
  },
  {
    accessorKey: "tags",
    header: ({}) => (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <span className="text-gray-70 font-normal">태그</span>
        <img src="/icon/sort-icon.svg" alt="" className="size-6" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex gap-2">
        {(row.getValue("tags") as ("내과" | "마취과")[]).map((tag) => (
          <TagIcon tag={tag} />
        ))}
      </div>
    ),
    size: 140,
  },
  {
    accessorKey: "created_at",
    header: ({}) => (
      <div className="flex justify-center items-center gap-2 cursor-pointer">
        <span className="text-gray-70 font-normal">생성 일자</span>
        <img src="/icon/sort-icon.svg" alt="" className="size-6" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-gray-70 text-sm">{row.getValue("created_at")}</div>
    ),
    size: 150,
  },
  {
    accessorKey: "description",
    header: ({}) => (
      <div>
        <span className="text-gray-70 font-normal">메모</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-gray-70 text-sm truncate">
        {row.getValue("description")}
      </div>
    ),
    size: 150,
  },
];

function ModelManagingPage() {
  const table = useReactTable({
    data: MODEL_LIST,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      <div className="flex items-center px-7 h-[68px]">
        <h4 className="text-lg font-hailsnow">모델 관리</h4>
      </div>
      <div>
        <div className="flex justify-between px-7">
          <SearchInput />
          <button className="flex items-center gap-4 h-12 px-6 rounded-[10px] bg-blue-50">
            <img src="/icon/compare-icon.svg" alt="" className="size-6" />
            <span>비교하기</span>
          </button>
        </div>
        <div className="mt-4 px-7 h-[776px] overflow-auto">
          <table className="border-separate border-spacing-x-0 border-spacing-y-1.5">
            <thead className="sticky top-0 z-10 h-12 bg-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        style={{ width: `${header.getSize()}px` }}
                        className="px-0 text-center"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="bg-blue-10/20 border">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-5 h-[60px] text-center first:rounded-l-[10px] first:border-l last:rounded-r-[10px] last:border-r border-t border-b border-blue-50/20"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
