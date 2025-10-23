import { LayoutDashboard } from 'lucide-react';

function Heading() {
  return (
    <div className="flex items-center gap-3 mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <LayoutDashboard className="w-8 h-8 text-yellow-400" />
      <h1 className="text-2xl font-bold text-black">Homepage Management</h1>
    </div>
  );
}

export default Heading;