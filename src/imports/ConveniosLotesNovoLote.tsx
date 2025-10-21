import svgPaths from "./svg-10b8ioutqm";

function Left() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[62px] items-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333]" data-name="Left">
      <div className="flex flex-col font-['Geist:Medium',_'Noto_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[1.2]">{`Gerar Lote de Guias `}</p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[1.3]">{`Selecione o convênio para visualizar e agrupar guias elegíveis em um novo lote. `}</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex font-['Geist:Medium',_sans-serif] font-medium gap-[6px] items-center relative shrink-0 text-nowrap" data-name="Text">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#747472] text-[12px]">
        <p className="leading-[1.3] text-nowrap whitespace-pre">Convênio</p>
      </div>
      <p className="leading-[1.3] relative shrink-0 text-[#333333] text-[14px] whitespace-pre">Unimed Curitiba</p>
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="keyboard arrow down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="keyboard arrow down">
          <path d={svgPaths.p2cfb7380} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[38px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Text />
      <KeyboardArrowDown />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Right">
      <Button />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Header">
      <Left />
      <Right />
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="add">
          <path d={svgPaths.p2a8b2900} fill="var(--fill-0, #747472)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FilterPill() {
  return (
    <div className="bg-white h-[38px] relative rounded-[6px] shrink-0" data-name="Filter Pill">
      <div className="box-border content-stretch flex gap-[6px] h-[38px] items-center justify-center overflow-clip pl-[8px] pr-[12px] py-[6px] relative rounded-[inherit]">
        <Add />
        <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575753] text-[14px] text-nowrap whitespace-pre">Data</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-dashed inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="add">
          <path d={svgPaths.p2a8b2900} fill="var(--fill-0, #747472)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FilterPill1() {
  return (
    <div className="bg-white h-[38px] relative rounded-[6px] shrink-0" data-name="Filter Pill">
      <div className="box-border content-stretch flex gap-[6px] h-[38px] items-center justify-center overflow-clip pl-[8px] pr-[12px] py-[6px] relative rounded-[inherit]">
        <Add1 />
        <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575753] text-[14px] text-nowrap whitespace-pre">Status da guia</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-dashed inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Add2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="add">
          <path d={svgPaths.p2a8b2900} fill="var(--fill-0, #747472)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FilterPill2() {
  return (
    <div className="bg-white h-[38px] relative rounded-[6px] shrink-0" data-name="Filter Pill">
      <div className="box-border content-stretch flex gap-[6px] h-[38px] items-center justify-center overflow-clip pl-[8px] pr-[12px] py-[6px] relative rounded-[inherit]">
        <Add2 />
        <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575753] text-[14px] text-nowrap whitespace-pre">Paciente</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-dashed inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Add3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="add">
          <path d={svgPaths.p2a8b2900} fill="var(--fill-0, #747472)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FilterPill3() {
  return (
    <div className="bg-white h-[38px] relative rounded-[6px] shrink-0" data-name="Filter Pill">
      <div className="box-border content-stretch flex gap-[6px] h-[38px] items-center justify-center overflow-clip pl-[8px] pr-[12px] py-[6px] relative rounded-[inherit]">
        <Add3 />
        <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575753] text-[14px] text-nowrap whitespace-pre">Procedimento</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-dashed inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Add4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="add">
          <path d={svgPaths.p2a8b2900} fill="var(--fill-0, #747472)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FilterPill4() {
  return (
    <div className="bg-white h-[38px] relative rounded-[6px] shrink-0" data-name="Filter Pill">
      <div className="box-border content-stretch flex gap-[6px] h-[38px] items-center justify-center overflow-clip pl-[8px] pr-[12px] py-[6px] relative rounded-[inherit]">
        <Add4 />
        <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575753] text-[14px] text-nowrap whitespace-pre">Profissional</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-dashed inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame427321245() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full">
      <FilterPill />
      <FilterPill1 />
      <FilterPill2 />
      <FilterPill3 />
      <FilterPill4 />
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Filters">
      <Frame427321245 />
    </div>
  );
}

function Filters1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Filters">
      <Filters />
    </div>
  );
}

function CheckboxControl() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-px relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox Control">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function TableCell() {
  return (
    <div className="box-border content-stretch flex items-center p-[8px] relative shrink-0 w-[32px]" data-name="Table Cell">
      <CheckboxControl />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[113px]" data-name="Table Header">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747472] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Data</p>
      </div>
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="Table Header">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747472] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Número da guia</p>
      </div>
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[119px]" data-name="Table Header">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747472] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Paciente</p>
      </div>
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[154px]" data-name="Table Header">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747472] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Procedimento</p>
      </div>
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[91px]" data-name="Table Header">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747472] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Status</p>
      </div>
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="Table Header">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747472] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Valor</p>
      </div>
    </div>
  );
}

function HeaderTable() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Header Table">
      <TableCell />
      <TableHeader />
      <TableHeader1 />
      <TableHeader2 />
      <TableHeader3 />
      <TableHeader4 />
      <TableHeader5 />
    </div>
  );
}

function CheckSmall1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check small">
          <path d={svgPaths.p21f23300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxControl1() {
  return (
    <div className="bg-[#627906] content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox Control">
      <CheckSmall1 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="box-border content-stretch flex h-[48px] items-center p-[8px] relative shrink-0" data-name="Table Cell">
      <CheckboxControl1 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start justify-center p-[8px] relative shrink-0" data-name="Table Cell">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre">02 Out, 09h00</p>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start justify-center p-[8px] relative shrink-0 w-[117px]" data-name="Table Cell">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden">12345678901234567890</p>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center p-[8px] relative shrink-0" data-name="Table Cell">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre">Artur SS Soares</p>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Table Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col font-['Geist:Regular',_sans-serif] font-normal h-[48px] items-start justify-center leading-[0] p-[8px] relative text-nowrap w-full">
          <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] w-full">
            <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden text-nowrap">Terapia Ocupacional com Foco em Coord...</p>
          </div>
          <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#747472] text-[12px] w-full">
            <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden text-nowrap">Dra Talita Soares</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[20px] shrink-0" data-name="Status">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="url(#paint0_linear_1_8222)" id="Ellipse 1" r="4" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_8222" x1="6.21669e-05" x2="7.99994" y1="4.0374" y2="4.0374">
              <stop stopColor="#80ADFD" />
              <stop offset="0.5" stopColor="#70DAB0" />
              <stop offset="1" stopColor="#B6D244" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Completa</p>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center p-[8px] relative shrink-0" data-name="Table Cell">
      <Status />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center p-[8px] relative shrink-0" data-name="Table Cell">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden">R$ 320,00</p>
      </div>
    </div>
  );
}

function TableLineSidebar() {
  return (
    <div className="bg-white box-border content-stretch flex h-[48px] items-center px-0 py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Table Line Sidebar">
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function CheckboxControl2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-px relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox Control">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="box-border content-stretch flex h-[48px] items-center p-[8px] relative shrink-0" data-name="Table Cell">
      <CheckboxControl2 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start justify-center p-[8px] relative shrink-0" data-name="Table Cell">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre">02 Out, 09h00</p>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start justify-center p-[8px] relative shrink-0 w-[117px]" data-name="Table Cell">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden">12345678901234567890</p>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center p-[8px] relative shrink-0" data-name="Table Cell">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre">Artur SS Soares</p>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Table Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col font-['Geist:Regular',_sans-serif] font-normal h-[48px] items-start justify-center leading-[0] p-[8px] relative text-nowrap w-full">
          <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] w-full">
            <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden text-nowrap">Terapia Ocupacional com Foco em Coord...</p>
          </div>
          <div className="flex flex-col justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#747472] text-[12px] w-full">
            <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden text-nowrap">Dra Talita Soares</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Status1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[20px] shrink-0" data-name="Status">
      <div className="relative shrink-0 size-[8px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="url(#paint0_linear_1_8222)" id="Ellipse 1" r="4" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_8222" x1="6.21669e-05" x2="7.99994" y1="4.0374" y2="4.0374">
              <stop stopColor="#80ADFD" />
              <stop offset="0.5" stopColor="#70DAB0" />
              <stop offset="1" stopColor="#B6D244" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Completa</p>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center p-[8px] relative shrink-0" data-name="Table Cell">
      <Status1 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center p-[8px] relative shrink-0" data-name="Table Cell">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden">R$ 320,00</p>
      </div>
    </div>
  );
}

function TableLineSidebar1() {
  return (
    <div className="bg-white box-border content-stretch flex h-[48px] items-center px-0 py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Table Line Sidebar">
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <TableLineSidebar />
      {[...Array(8).keys()].map((_, i) => (
        <TableLineSidebar1 key={i} />
      ))}
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <HeaderTable />
      <Content />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron left">
          <path d={svgPaths.p23393900} fill="var(--fill-0, #575753)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 overflow-clip relative rounded-[6px] shrink-0 size-[33px]" data-name="Icon button">
      <ChevronLeft />
    </div>
  );
}

function Page() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] self-stretch shrink-0" data-name="Page">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[0px] text-center text-nowrap">
        <p className="leading-[1.3] text-[14px] whitespace-pre">
          <span className="font-['Geist:SemiBold',_sans-serif] font-semibold">01</span>
          <span className="text-[#8c8c8c]">/30</span>
        </p>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron Right">
          <path d={svgPaths.p17de5e40} fill="var(--fill-0, #575753)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[33px]" data-name="Icon button">
      <ChevronRight />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Navigation">
      <IconButton />
      <Page />
      <IconButton1 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-0 relative shrink-0" data-name="Pagination">
      <Navigation />
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8c8c8c] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Visualizando 1-10 de 300 cobranças</p>
      </div>
    </div>
  );
}

function Pagination1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Pagination">
      <Pagination />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[829px] items-start left-[60px] pb-[56px] pt-[32px] px-[40px] top-0 w-[791px]" data-name="MainContent">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Header />
      <Filters1 />
      <Table />
      <Pagination1 />
    </div>
  );
}

function HealthPlanBadge() {
  return (
    <div className="bg-[rgba(0,122,51,0.2)] box-border content-center flex flex-wrap gap-[4px] items-center pb-[2px] pt-px px-[8px] relative rounded-[500px] shrink-0" data-name="HealthPlanBadge">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Unimed Curitiba</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[10px] shrink-0 w-full" data-name="Content">
      <HealthPlanBadge />
    </div>
  );
}

function HealtPlan() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Healt Plan">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#747472] text-[10px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">CONVÊNIO</p>
      </div>
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[10px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function HealtPlan1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Healt Plan">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#747472] text-[10px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">GUIAS SELECIONADAS</p>
      </div>
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[10px] shrink-0 w-full" data-name="Content">
      <div className="basis-0 flex flex-col font-['Geist:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px]">
        <p className="leading-[1.3]">Terapia Ocupacional com Foco em Coordenação Motora</p>
      </div>
    </div>
  );
}

function HealtPlan2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Healt Plan">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#747472] text-[10px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">PROCEDIMENTOS (1)</p>
      </div>
      <Content3 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="absolute bg-[#e2d2ec] content-stretch flex items-center justify-center left-1/2 rounded-[9999px] size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Avatar">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-center text-nowrap">
        <p className="leading-[1.3] whitespace-pre">TS</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar />
    </div>
  );
}

function ProviderInfo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[0] relative shrink-0 text-nowrap w-full" data-name="Provider Info">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] w-full">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden text-nowrap">Talita Soares</p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[#575753] text-[12px] w-full">
        <p className="[white-space-collapse:collapse] leading-[1.3] overflow-ellipsis overflow-hidden text-nowrap">Especialidade</p>
      </div>
    </div>
  );
}

function PatientDetails() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Patient Details">
      <ProviderInfo />
    </div>
  );
}

function ProviderAvatar() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative rounded-[10px] shrink-0 w-[146px]" data-name="Provider Avatar">
      <Avatar1 />
      <PatientDetails />
    </div>
  );
}

function Frame427321601() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <ProviderAvatar />
    </div>
  );
}

function HealtPlan3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Healt Plan">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#747472] text-[10px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">PROFISSIONAIS (1)</p>
      </div>
      <Frame427321601 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[10px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">R$ 320,00</p>
      </div>
    </div>
  );
}

function HealtPlan4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Healt Plan">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#747472] text-[10px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">VALOR TOTAL</p>
      </div>
      <Content4 />
    </div>
  );
}

function Resumo() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Resumo">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <HealtPlan />
          <HealtPlan1 />
          <HealtPlan2 />
          <div className="bg-[#e8e8e8] h-px shrink-0 w-full" />
          <HealtPlan3 />
          <div className="bg-[#e8e8e8] h-px shrink-0 w-full" />
          <HealtPlan4 />
        </div>
      </div>
    </div>
  );
}

function Frame427321229() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Resumo</p>
      </div>
      <Resumo />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#fbfaf9] box-border content-stretch flex flex-col gap-[12px] h-[832px] items-start left-[851px] px-[24px] py-[32px] top-0 w-[430px]" data-name="Sidebar">
      <Frame427321229 />
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPaths.p9d2d00} fill="var(--fill-0, #333333)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#f9e9c2] content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Icon">
      <LeftIcon />
    </div>
  );
}

function IconFrame() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Icon Frame">
      <Icon />
    </div>
  );
}

function NavigationItem() {
  return (
    <div className="bg-[#f9e9c2] content-stretch flex gap-[2px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame />
    </div>
  );
}

function LeftIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPaths.p3e3c4800} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Icon">
      <LeftIcon1 />
    </div>
  );
}

function IconFrame1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Icon Frame">
      <Icon1 />
    </div>
  );
}

function NavigationItem1() {
  return (
    <div className="bg-[#f2efee] content-stretch flex gap-[2px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame1 />
    </div>
  );
}

function LeftIcon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPaths.p2a79d100} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Icon">
      <LeftIcon2 />
    </div>
  );
}

function IconFrame2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Icon Frame">
      <Icon2 />
    </div>
  );
}

function NavigationItem2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame2 />
    </div>
  );
}

function LeftIcon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <g id="Vector">
            <path d={svgPaths.p2bead000} fill="#333333" />
            <path d={svgPaths.p2ce71a10} fill="#333333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Icon">
      <LeftIcon3 />
    </div>
  );
}

function IconFrame3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Icon Frame">
      <Icon3 />
    </div>
  );
}

function NavigationItem3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame3 />
    </div>
  );
}

function LeftIcon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPaths.p22266680} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Icon">
      <LeftIcon4 />
    </div>
  );
}

function IconFrame4() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Icon Frame">
      <Icon4 />
    </div>
  );
}

function NavigationItem4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame4 />
    </div>
  );
}

function LeftIcon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPaths.pbff5c00} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Icon">
      <LeftIcon5 />
    </div>
  );
}

function IconFrame5() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Icon Frame">
      <Icon5 />
    </div>
  );
}

function NavigationItem5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame5 />
    </div>
  );
}

function Submenu() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Submenu">
      <NavigationItem5 />
    </div>
  );
}

function MenuMiddle() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Menu Middle">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <NavigationItem />
          <NavigationItem1 />
          <NavigationItem2 />
          <NavigationItem3 />
          <NavigationItem4 />
          <Submenu />
        </div>
      </div>
    </div>
  );
}

function MenuTop() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Menu top">
      <MenuMiddle />
    </div>
  );
}

function LeftIcon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPaths.pb4f1f80} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Icon">
      <LeftIcon6 />
    </div>
  );
}

function IconFrame6() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Icon Frame">
      <Icon6 />
    </div>
  );
}

function NavigationItem6() {
  return (
    <div className="content-stretch flex gap-[2px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame6 />
    </div>
  );
}

function LeftIcon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPaths.p2b908300} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Icon">
      <LeftIcon7 />
    </div>
  );
}

function IconFrame7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Icon Frame">
      <Icon7 />
    </div>
  );
}

function NavigationItem7() {
  return (
    <div className="content-stretch flex gap-[2px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame7 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="bg-[#e2d2ec] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[10px] text-justify text-nowrap">
        <p className="leading-[1.3] whitespace-pre">MA</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Icon">
      <Avatar2 />
    </div>
  );
}

function IconFrame8() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[100px] shrink-0 size-[40px]" data-name="Icon Frame">
      <Icon8 />
    </div>
  );
}

function NavigationItem8() {
  return (
    <div className="content-stretch flex gap-[2px] items-center overflow-clip relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame8 />
    </div>
  );
}

function MenuMiddle1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Menu Middle">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
          <NavigationItem6 />
          <NavigationItem7 />
          <NavigationItem8 />
        </div>
      </div>
    </div>
  );
}

function MenuBottom() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Menu bottom">
      <MenuMiddle1 />
    </div>
  );
}

function SidebarNavigation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[832px] items-start justify-between left-0 top-1/2 translate-y-[-50%] w-[60px]" data-name="Sidebar Navigation">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <MenuTop />
      <MenuBottom />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ddf67a] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#333333] text-[15px] text-nowrap tracking-[0.15px] whitespace-pre">Gerar lote</p>
    </div>
  );
}

function Frame427321241() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[380px]">
      <Button2 />
    </div>
  );
}

function Action() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-start left-[851px] px-[22px] py-[16px] top-[765px] w-[429px]" data-name="Action">
      <div aria-hidden="true" className="absolute border-[#dedede] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame427321241 />
    </div>
  );
}

export default function ConveniosLotesNovoLote() {
  return (
    <div className="bg-white relative size-full" data-name="Convênios - Lotes - Novo Lote">
      <Action />
      <MainContent />
      <Sidebar />
      <SidebarNavigation />
    </div>
  );
}