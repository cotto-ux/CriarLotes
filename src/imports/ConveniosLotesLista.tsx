import svgPaths from "./svg-kzaoba29r6";

function Left() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-[698px]" data-name="Left">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[18px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">Lotes</p>
      </div>
    </div>
  );
}

interface ButtonProps {
  onClick?: () => void;
}

function Button({ onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#ddf67a] box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#d0ea5e] transition-colors" 
      data-name="Button"
    >
      <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#333333] text-[15px] text-nowrap whitespace-pre">Novo lote</p>
    </button>
  );
}

interface RightProps {
  onNovoLoteClick?: () => void;
}

function Right({ onNovoLoteClick }: RightProps) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Right">
      <Button onClick={onNovoLoteClick} />
    </div>
  );
}

interface HeaderProps {
  onNovoLoteClick?: () => void;
}

function Header({ onNovoLoteClick }: HeaderProps) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Left />
      <Right onNovoLoteClick={onNovoLoteClick} />
    </div>
  );
}

interface Frame2300Props {
  onNovoLoteClick?: () => void;
}

function Frame2300({ onNovoLoteClick }: Frame2300Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full">
      <Header onNovoLoteClick={onNovoLoteClick} />
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
        <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575753] text-[14px] text-nowrap whitespace-pre">Convênio</p>
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
        <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575753] text-[14px] text-nowrap whitespace-pre">Procedimento</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-dashed inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Filters">
      <FilterPill />
      <FilterPill1 />
      <FilterPill2 />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="close">
          <path d={svgPaths.p3eab8d00} fill="var(--fill-0, #575753)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2301() {
  return (
    <div className="box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0">
      <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] relative shrink-0 text-[#575753] text-[12px] text-nowrap whitespace-pre">Limpar Filtros</p>
      <Close />
    </div>
  );
}

function FilterPill3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[6px] items-center justify-end overflow-clip px-[4px] py-[6px] relative rounded-[6px] shrink-0" data-name="Filter Pill">
      <Frame2301 />
    </div>
  );
}

function ClearAll() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Clear All">
      <FilterPill3 />
    </div>
  );
}

function TabFilters() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Tab Filters">
      <Filters />
      <ClearAll />
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
    <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[133px]" data-name="Table Header">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747472] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Criação do lote</p>
      </div>
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747472] text-[14px] text-nowrap">
            <p className="leading-[1.3] whitespace-pre">Número do lote</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747472] text-[14px] text-nowrap">
            <p className="leading-[1.3] whitespace-pre">Convênio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747472] text-[14px] text-nowrap">
            <p className="leading-[1.3] whitespace-pre">Status do lote</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747472] text-[14px] text-nowrap">
            <p className="leading-[1.3] whitespace-pre">Valor total</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="Table Header">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#747472] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Ações</p>
      </div>
    </div>
  );
}

function HeaderTable() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header Table">
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

function CheckboxControl1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-px relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox Control">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[2px]" />
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

function Tat() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tat">
          <path d={svgPaths.p2b739552} fill="url(#paint0_linear_1_8277)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_8277" x1="3.33333" x2="12.6664" y1="8.00035" y2="8.00035">
            <stop stopColor="#80ADFD" />
            <stop offset="0.4375" stopColor="#70DAB0" />
            <stop offset="1" stopColor="#B6D244" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center p-[8px] relative shrink-0" data-name="Table Cell">
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre">02 Out, 09h00</p>
      </div>
      <Tat />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Table Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#333333] text-[14px] text-nowrap">
            <p className="leading-[1.3] overflow-ellipsis overflow-hidden whitespace-pre">12345678901234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthPlanBadge() {
  return (
    <div className="bg-[rgba(0,122,51,0.2)] box-border content-center flex flex-wrap gap-[4px] items-center pb-[2px] pt-px px-[8px] relative rounded-[500px] shrink-0" data-name="HealthPlanBadge">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[12px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Unimed</p>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Table Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center p-[8px] relative w-full">
          <HealthPlanBadge />
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
          <circle cx="4" cy="4" fill="var(--fill-0, #4B7AD9)" id="Ellipse 1" r="4" />
        </svg>
      </div>
      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap">
        <p className="leading-[1.3] whitespace-pre">Agendada</p>
      </div>
    </div>
  );
}

function StatusLote() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Status Lote">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center p-[8px] relative w-full">
          <Status />
        </div>
      </div>
    </div>
  );
}

function TableCellProgressBarPart() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Table Cell Progress Bar Part">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center p-[8px] relative w-full">
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333333] text-[14px] text-nowrap text-right">
            <p className="leading-[1.3] whitespace-pre">R$ 1.234,56</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVert() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="more vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="more vert">
          <path d={svgPaths.p19f70c00} fill="var(--fill-0, #575753)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-neutral-100 content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[28px]" data-name="Icon button">
      <MoreVert />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center p-[8px] relative shrink-0 w-[56px]" data-name="Table Cell">
      <IconButton1 />
    </div>
  );
}

function LinhaTabela() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Linha Tabela">
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <StatusLote />
      <TableCellProgressBarPart />
      <TableCell5 />
    </div>
  );
}

function Frame427321598() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <LinhaTabela />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <HeaderTable />
      <Frame427321598 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron Left">
          <mask height="16" id="mask0_1_8265" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="box" width="16" />
          </mask>
          <g mask="url(#mask0_1_8265)">
            <path d={svgPaths.p23393900} fill="var(--fill-0, #575753)" id="icon" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="bg-[#fbfbf9] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[33px]" data-name="Icon button">
      <ChevronLeft />
    </div>
  );
}

function Page() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] self-stretch shrink-0" data-name="Page">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[0px] text-center text-nowrap">
        <p className="leading-[1.5] text-[13px] whitespace-pre">
          <span className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold">01</span>
          <span className="text-[#8c8c8c]">/01</span>
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
          <mask height="16" id="mask0_1_8261" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="box" width="16" />
          </mask>
          <g mask="url(#mask0_1_8261)">
            <path d={svgPaths.p17de5e40} fill="var(--fill-0, #575753)" id="icon" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="bg-[#fbfbf9] relative rounded-[6px] shrink-0 size-[33px]" data-name="Icon button">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-[33px]">
        <ChevronRight />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e7d5] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Navigation">
      <IconButton2 />
      <Page />
      <IconButton3 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-0 relative shrink-0" data-name="Pagination">
      <Navigation />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#8c8c8c] text-[13px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Visualizando 11 de 11 guias</p>
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

interface Content1Props {
  onNovoLoteClick?: () => void;
}

function Content1({ onNovoLoteClick }: Content1Props) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[60px] pt-[45px] px-[32px] relative w-full">
          <Frame2300 onNovoLoteClick={onNovoLoteClick} />
          <TabFilters />
          <Table />
          <Pagination1 />
        </div>
      </div>
    </div>
  );
}

interface Frame427321293Props {
  onNovoLoteClick?: () => void;
}

function Frame427321293({ onNovoLoteClick }: Frame427321293Props) {
  return (
    <div className="absolute content-stretch flex items-start left-[56px] top-0 w-[1224px]">
      <Content1 onNovoLoteClick={onNovoLoteClick} />
    </div>
  );
}

function Help() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Help">
          <path d={svgPaths.pe3dba40} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Icon">
      <Help />
    </div>
  );
}

function IconFrame() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Frame">
      <Icon />
    </div>
  );
}

function NavigationItem() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame />
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="settings">
          <path d={svgPaths.p2b908300} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Icon">
      <Settings />
    </div>
  );
}

function IconFrame1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Frame">
      <Icon1 />
    </div>
  );
}

function NavigationItem1() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame1 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#e2d2ec] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
      <div className="flex flex-col font-['Geist:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333333] text-[10px] text-justify text-nowrap">
        <p className="leading-[1.3] whitespace-pre">TS</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#fcf1d6] content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Icon">
      <Avatar />
    </div>
  );
}

function IconFrame2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Frame">
      <Icon2 />
    </div>
  );
}

function NavigationItem2() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame2 />
    </div>
  );
}

function MenuBottom() {
  return (
    <div className="absolute bottom-[8px] box-border content-stretch flex flex-col gap-[4px] items-start justify-end left-0 pl-[8px] pr-0 py-0 w-[56px]" data-name="Menu Bottom">
      <NavigationItem />
      <NavigationItem1 />
      <NavigationItem2 />
    </div>
  );
}

function LeftIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPaths.p9d2d00} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#f9e9c2] content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Icon">
      <LeftIcon1 />
    </div>
  );
}

function IconFrame3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Frame">
      <Icon3 />
    </div>
  );
}

function NavigationItem3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame3 />
    </div>
  );
}

function TivitaSpark() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tivita spark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tivita spark">
          <g id="Vector">
            <path d={svgPaths.pbe86680} fill="var(--fill-0, #333333)" />
            <path clipRule="evenodd" d={svgPaths.p24308000} fill="var(--fill-0, #333333)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Icon">
      <TivitaSpark />
    </div>
  );
}

function IconFrame4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Frame">
      <Icon4 />
    </div>
  );
}

function NavigationItem4() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame4 />
    </div>
  );
}

function CalendarToday() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="calendar today">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="calendar today">
          <path d={svgPaths.p2c51da00} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Icon">
      <CalendarToday />
    </div>
  );
}

function IconFrame5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Frame">
      <Icon5 />
    </div>
  );
}

function NavigationItem5() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame5 />
    </div>
  );
}

function Money() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="money">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="money">
          <path d={svgPaths.p2a79d100} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Icon">
      <Money />
    </div>
  );
}

function IconFrame6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Frame">
      <Icon6 />
    </div>
  );
}

function NavigationItem6() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame6 />
    </div>
  );
}

function Insights() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Insights">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Insights">
          <g id="Vector">
            <path d={svgPaths.p2bead000} fill="#333333" />
            <path d={svgPaths.p2ce71a10} fill="#333333" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Icon">
      <Insights />
    </div>
  );
}

function IconFrame7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Frame">
      <Icon7 />
    </div>
  );
}

function NavigationItem7() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame7 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="group">
          <path d={svgPaths.p22266680} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Icon">
      <Group />
    </div>
  );
}

function IconFrame8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Frame">
      <Icon8 />
    </div>
  );
}

function NavigationItem8() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame8 />
    </div>
  );
}

function Payments() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="payments">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="payments">
          <path d={svgPaths.p2e600d00} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Icon">
      <Payments />
    </div>
  );
}

function IconFrame9() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Frame">
      <Icon9 />
    </div>
  );
}

function NavigationItem9() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center relative rounded-[100px] shrink-0" data-name="Navigation Item">
      <IconFrame9 />
    </div>
  );
}

function MenuMiddle() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[4px] items-start left-0 px-[8px] py-0 top-1/2 translate-y-[-50%]" data-name="Menu Middle">
      <NavigationItem3 />
      <NavigationItem4 />
      <NavigationItem5 />
      <NavigationItem6 />
      <NavigationItem7 />
      <NavigationItem8 />
      <NavigationItem9 />
    </div>
  );
}

function MenuMiddle1() {
  return (
    <div className="absolute h-[304px] left-0 top-[8px] w-[56px]" data-name="Menu Middle">
      <MenuMiddle />
    </div>
  );
}

function SidebarNavigation() {
  return (
    <div className="absolute bg-white h-[832px] left-0 top-0 w-[56px]" data-name="Sidebar Navigation">
      <div aria-hidden="true" className="absolute border-[#f6f6f6] border-[0px_2px_0px_0px] border-solid inset-0 pointer-events-none" />
      <MenuBottom />
      <MenuMiddle1 />
    </div>
  );
}

interface ConveniosLotesListaProps {
  onNovoLoteClick?: () => void;
}

export default function ConveniosLotesLista({ onNovoLoteClick }: ConveniosLotesListaProps) {
  return (
    <div className="bg-white relative size-full" data-name="Convênios - Lotes - Lista">
      <Frame427321293 onNovoLoteClick={onNovoLoteClick} />
      <SidebarNavigation />
    </div>
  );
}