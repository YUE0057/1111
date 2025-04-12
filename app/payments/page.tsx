'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PaymentsPage() {
  const [formData, setFormData] = useState({
    unit: '',
    amount: '',
    paymentMethod: 'creditCard',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 实现支付逻辑
    console.log('Payment submitted:', formData);
    alert('支付请求已提交！');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">物业费缴纳</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              返回首页
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          {/* 费用信息展示 */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-medium text-gray-900 mb-4">费用信息</h2>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">当前余额：</span>
                <span className="text-red-600">-￥1,200.00</span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">本月应缴：</span>
                <span>￥500.00</span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">缴费期限：</span>
                <span>2024-04-30</span>
              </p>
            </div>
          </div>

          {/* 缴费表单 */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
                单元号
              </label>
              <input
                type="text"
                name="unit"
                id="unit"
                required
                value={formData.unit}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                缴费金额
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">￥</span>
                </div>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  required
                  value={formData.amount}
                  onChange={handleChange}
                  className="block w-full pl-7 pr-12 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                支付方式
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="creditCard">信用卡</option>
                <option value="wechat">微信支付</option>
                <option value="alipay">支付宝</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                确认支付
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 