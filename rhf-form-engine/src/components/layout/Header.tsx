function Header() {
  return (
    <div className=" overflow-hidden h-16 bg-gray-300 px-6 py-2 flex justify-between text-gray-600">
      <h1>Form Engine</h1>
      <div className="flex gap-4">
        <button className="border-1 px-4 rounded-md  border-gray-500">
          공유
        </button>
        <button className="border-1 px-4 rounded-md  border-gray-500">
          다운로드
        </button>
      </div>
    </div>
  );
}

export default Header;
