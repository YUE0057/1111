import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">物业管理系统</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* 公告板 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">最新公告</h2>
              <ul className="space-y-4">
                <li className="text-gray-600">
                  <span className="text-sm text-gray-500">2024-04-12</span>
                  <p>电梯年度维护通知</p>
                </li>
                <li className="text-gray-600">
                  <span className="text-sm text-gray-500">2024-04-10</span>
                  <p>业主委员会会议纪要</p>
                </li>
              </ul>
            </div>
          </div>

          {/* 快速链接 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">快速链接</h2>
              <div className="space-y-3">
                <Link href="/maintenance" className="block text-blue-600 hover:text-blue-800">
                  维修申请
                </Link>
                <Link href="/payments" className="block text-blue-600 hover:text-blue-800">
                  物业费缴纳
                </Link>
                <Link href="/documents" className="block text-blue-600 hover:text-blue-800">
                  文件下载
                </Link>
              </div>
            </div>
          </div>

          {/* 联系信息 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">联系我们</h2>
              <div className="space-y-2 text-gray-600">
                <p>紧急联系电话：000-000-000</p>
                <p>物业办公室：101室</p>
                <p>办公时间：周一至周五 9:00-17:00</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 物业管理系统. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
