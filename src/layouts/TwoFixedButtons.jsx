function SideFixedButtons() {
  return (
    <div className="fixed right-0 top-1/4 flex flex-col items-end gap-2 z-50">
      {/* Prospectus PDF Download */}
      <a
        href="/images/pdf.pdf"
        className="bg-yellow-400 text-black px-3 py-3 w-12 h-40 flex justify-center items-center text-sm text-center font-bold rounded-r-md shadow-lg transform transition hover:bg-blue-900 hover:text-white whitespace-nowrap"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        PROSPECTUS
      </a>

      {/* Admission Form PDF Download */}
      <a
        href="/images/pdf.pdf"
       
        className="bg-red-500 text-white px-3 py-3 w-12 h-40 flex justify-center items-center text-sm text-center font-bold rounded-r-md shadow-lg transform transition hover:bg-blue-600 hover:text-white whitespace-nowrap"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        ADMISSION FORM
      </a>
    </div>
  );
}

export default SideFixedButtons;
