import { useState } from 'react';
import svgPaths from '../imports/svg-10b8ioutqm';

interface GuiaData {
  id: string;
  data: string;
  numero: string;
  paciente: string;
  procedimento: string;
  profissional: string;
  status: string;
  valor: string;
}

const mockGuias: GuiaData[] = [
  {
    id: '1',
    data: '02 Out, 09h00',
    numero: '12345678901234567890',
    paciente: 'Artur SS Soares',
    procedimento: 'Terapia Ocupacional com Foco em Coord...',
    profissional: 'Dra Talita Soares',
    status: 'Completa',
    valor: 'R$ 320,00',
  },
  ...Array(8).fill(null).map((_, i) => ({
    id: `${i + 2}`,
    data: '02 Out, 09h00',
    numero: '12345678901234567890',
    paciente: 'Artur SS Soares',
    procedimento: 'Terapia Ocupacional com Foco em Coord...',
    profissional: 'Dra Talita Soares',
    status: 'Completa',
    valor: 'R$ 320,00',
  })),
];

interface NovoLoteInteractiveProps {
  onBack?: () => void;
}

export default function NovoLoteInteractive({ onBack }: NovoLoteInteractiveProps) {
  const [selectedGuias, setSelectedGuias] = useState<Set<string>>(new Set());

  const toggleGuia = (id: string) => {
    const newSelected = new Set(selectedGuias);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedGuias(newSelected);
  };

  const selectedGuiasData = mockGuias.filter(guia => selectedGuias.has(guia.id));
  const totalValue = selectedGuiasData.reduce((sum, guia) => {
    const value = parseFloat(guia.valor.replace('R$ ', '').replace(',', '.'));
    return sum + value;
  }, 0);

  const uniqueProcedimentos = new Set(selectedGuiasData.map(g => g.procedimento));
  const uniqueProfissionais = new Set(selectedGuiasData.map(g => g.profissional));

  return (
    <div className="bg-white relative size-full" data-name="Convênios - Lotes - Novo Lote">
      {/* Main Content */}
      <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[829px] items-start left-[60px] pb-[56px] pt-[32px] px-[40px] top-0 w-[791px]" data-name="MainContent">
        <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
        
        {/* Header */}
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[62px] items-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#333333]">
            <div className="flex flex-col font-['Geist:Medium',_'Noto_Sans:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[18px] w-full">
              <p className="leading-[1.2]">Gerar Lote de Guias</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[14px] w-full">
              <p className="leading-[1.3]">Selecione o convênio para visualizar e agrupar guias elegíveis em um novo lote.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
            <div className="bg-white box-border content-stretch flex gap-[4px] h-[38px] items-center justify-center pl-[12px] pr-[8px] py-[8px] relative rounded-[6px] shrink-0">
              <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <div className="content-stretch flex font-['Geist:Medium',_sans-serif] font-medium gap-[6px] items-center relative shrink-0 text-nowrap">
                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#747472] text-[12px]">
                  <p className="leading-[1.3] text-nowrap whitespace-pre">Convênio</p>
                </div>
                <p className="leading-[1.3] relative shrink-0 text-[#333333] text-[14px] whitespace-pre">Unimed Curitiba</p>
              </div>
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p2cfb7380} fill="var(--fill-0, #333333)" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
          <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full">
            {['Data', 'Status da guia', 'Paciente', 'Procedimento', 'Profissional'].map((filter) => (
              <div key={filter} className="bg-white h-[38px] relative rounded-[6px] shrink-0">
                <div className="box-border content-stretch flex gap-[6px] h-[38px] items-center justify-center overflow-clip pl-[8px] pr-[12px] py-[6px] relative rounded-[inherit]">
                  <div className="relative shrink-0 size-[12px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <path d={svgPaths.p2a8b2900} fill="var(--fill-0, #747472)" />
                    </svg>
                  </div>
                  <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#575753] text-[14px] text-nowrap whitespace-pre">{filter}</p>
                </div>
                <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-dashed inset-0 pointer-events-none rounded-[6px]" />
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full overflow-auto max-h-[500px]">
          {/* Header */}
          <div className="content-stretch flex items-start relative shrink-0 w-full sticky top-0 bg-white z-10">
            <div className="box-border content-stretch flex items-center p-[8px] relative shrink-0 w-[32px]">
              <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-px relative rounded-[2px] shrink-0 size-[16px]">
                <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[2px]" />
              </div>
            </div>
            <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[113px]">
              <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#747472] text-[14px] whitespace-pre">Data</p>
            </div>
            <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0">
              <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#747472] text-[14px] whitespace-pre">Número da guia</p>
            </div>
            <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[119px]">
              <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#747472] text-[14px] whitespace-pre">Paciente</p>
            </div>
            <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[154px]">
              <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#747472] text-[14px] whitespace-pre">Procedimento</p>
            </div>
            <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[91px]">
              <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#747472] text-[14px] whitespace-pre">Status</p>
            </div>
            <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0">
              <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#747472] text-[14px] whitespace-pre">Valor</p>
            </div>
          </div>

          {/* Rows */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {mockGuias.map((guia) => {
              const isSelected = selectedGuias.has(guia.id);
              return (
                <div
                  key={guia.id}
                  onClick={() => toggleGuia(guia.id)}
                  className={`box-border content-stretch flex h-[48px] items-center px-0 py-[8px] relative rounded-[8px] shrink-0 w-full cursor-pointer transition-colors ${
                    isSelected ? 'bg-[#f9f9f7]' : 'bg-white hover:bg-[#fbfbfa]'
                  }`}
                >
                  <div className="box-border content-stretch flex h-[48px] items-center p-[8px] relative shrink-0">
                    <div className={`content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0 size-[16px] ${
                      isSelected ? 'bg-[#627906]' : 'bg-white'
                    }`}>
                      {isSelected ? (
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p21f23300} fill="white" />
                        </svg>
                      ) : (
                        <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[2px]" />
                      )}
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start justify-center p-[8px] relative shrink-0">
                    <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#333333] text-[14px] overflow-ellipsis overflow-hidden whitespace-pre">
                      {guia.data}
                    </p>
                  </div>
                  <div className="box-border content-stretch flex flex-col gap-[4px] h-[48px] items-start justify-center p-[8px] relative shrink-0 w-[117px]">
                    <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#333333] text-[14px] overflow-ellipsis overflow-hidden">
                      {guia.numero}
                    </p>
                  </div>
                  <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center p-[8px] relative shrink-0">
                    <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#333333] text-[14px] overflow-ellipsis overflow-hidden whitespace-pre">
                      {guia.paciente}
                    </p>
                  </div>
                  <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
                    <div className="box-border content-stretch flex flex-col font-['Geist:Regular',_sans-serif] font-normal h-[48px] items-start justify-center leading-[0] p-[8px] relative text-nowrap w-full">
                      <p className="leading-[1.3] text-[#333333] text-[14px] overflow-ellipsis overflow-hidden text-nowrap w-full">
                        {guia.procedimento}
                      </p>
                      <p className="leading-[1.3] text-[#747472] text-[12px] overflow-ellipsis overflow-hidden text-nowrap w-full">
                        {guia.profissional}
                      </p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center p-[8px] relative shrink-0">
                    <div className="content-stretch flex gap-[4px] items-center relative rounded-[20px] shrink-0">
                      <div className="relative shrink-0 size-[8px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" fill="url(#paint0_linear_1_8222)" r="4" />
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_8222" x1="6.21669e-05" x2="7.99994" y1="4.0374" y2="4.0374">
                              <stop stopColor="#80ADFD" />
                              <stop offset="0.5" stopColor="#70DAB0" />
                              <stop offset="1" stopColor="#B6D244" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#333333] text-[14px] whitespace-pre">{guia.status}</p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center p-[8px] relative shrink-0">
                    <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#333333] text-[14px] overflow-ellipsis overflow-hidden">
                      {guia.valor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination */}
        <div className="content-stretch flex items-start relative shrink-0 w-full">
          <div className="box-border content-stretch flex gap-[16px] items-center px-[8px] py-0 relative shrink-0">
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
              <div className="content-stretch flex items-center justify-center opacity-0 overflow-clip relative rounded-[6px] shrink-0 size-[33px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p23393900} fill="var(--fill-0, #575753)" />
                </svg>
              </div>
              <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] self-stretch shrink-0">
                <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#333333] text-[14px] text-center whitespace-pre">
                  <span className="font-['Geist:SemiBold',_sans-serif] font-semibold">01</span>
                  <span className="text-[#8c8c8c]">/30</span>
                </p>
              </div>
              <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[33px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p17de5e40} fill="var(--fill-0, #575753)" />
                </svg>
              </div>
            </div>
            <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#8c8c8c] text-[14px] whitespace-pre">
              Visualizando 1-10 de 300 cobranças
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="absolute bg-[#fbfaf9] box-border content-stretch flex flex-col gap-[12px] h-[832px] items-start left-[851px] px-[24px] py-[32px] top-0 w-[430px]">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] text-[#333333] text-[14px] whitespace-pre">
            Resumo
          </p>
          <div className="bg-white relative rounded-[8px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
              {/* Convênio */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] text-[#747472] text-[10px] whitespace-pre">
                  CONVÊNIO
                </p>
                <div className="bg-[rgba(0,122,51,0.2)] box-border content-center flex flex-wrap gap-[4px] items-center pb-[2px] pt-px px-[8px] relative rounded-[500px] shrink-0">
                  <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] text-[#333333] text-[12px] whitespace-pre">
                    Unimed Curitiba
                  </p>
                </div>
              </div>

              {/* Guias Selecionadas */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] text-[#747472] text-[10px] whitespace-pre">
                  GUIAS SELECIONADAS
                </p>
                <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#333333] text-[14px] whitespace-pre">
                  {selectedGuias.size}
                </p>
              </div>

              {/* Procedimentos */}
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] text-[#747472] text-[10px] whitespace-pre">
                  PROCEDIMENTOS ({uniqueProcedimentos.size})
                </p>
                {selectedGuias.size > 0 && (
                  <div className="content-stretch flex gap-[10px] items-center relative rounded-[10px] shrink-0 w-full">
                    <p className="basis-0 flex flex-col font-['Geist:Regular',_sans-serif] font-normal grow justify-center leading-[1.3] min-h-px min-w-px relative shrink-0 text-[#333333] text-[14px]">
                      {Array.from(uniqueProcedimentos).join(', ')}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-[#e8e8e8] h-px shrink-0 w-full" />

              {/* Profissionais */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] text-[#747472] text-[10px] whitespace-pre">
                  PROFISSIONAIS ({uniqueProfissionais.size})
                </p>
                {selectedGuias.size > 0 && (
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
                    {Array.from(uniqueProfissionais).map((prof, idx) => (
                      <div key={idx} className="content-stretch flex gap-[8px] h-[32px] items-center relative rounded-[10px] shrink-0 w-[146px]">
                        <div className="relative shrink-0 size-[32px]">
                          <div className="absolute bg-[#e2d2ec] content-stretch flex items-center justify-center left-1/2 rounded-[9999px] size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                            <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] text-[#333333] text-[12px] text-center whitespace-pre">
                              TS
                            </p>
                          </div>
                        </div>
                        <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
                          <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] text-[#333333] text-[14px] overflow-ellipsis overflow-hidden text-nowrap w-full">
                            Talita Soares
                          </p>
                          <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#575753] text-[12px] overflow-ellipsis overflow-hidden text-nowrap w-full">
                            Especialidade
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-[#e8e8e8] h-px shrink-0 w-full" />

              {/* Valor Total */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] text-[#747472] text-[10px] whitespace-pre">
                  VALOR TOTAL
                </p>
                <p className="font-['Geist:Regular',_sans-serif] font-normal leading-[1.3] text-[#333333] text-[14px] whitespace-pre">
                  R$ {totalValue.toFixed(2).replace('.', ',')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="absolute bg-white content-stretch flex flex-col h-[832px] items-start justify-between left-0 top-1/2 translate-y-[-50%] w-[60px]">
        <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
        {/* Navigation items would go here - simplified for brevity */}
      </div>

      {/* Action Button */}
      <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] items-start left-[851px] px-[22px] py-[16px] top-[765px] w-[429px]">
        <div aria-hidden="true" className="absolute border-[#dedede] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center justify-end relative shrink-0 w-[380px]">
          <button
            disabled={selectedGuias.size === 0}
            className={`box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 transition-opacity ${
              selectedGuias.size === 0 ? 'bg-[#ddf67a] opacity-50 cursor-not-allowed' : 'bg-[#ddf67a] hover:bg-[#d0ea5e] cursor-pointer'
            }`}
          >
            <p className="font-['Geist:Medium',_sans-serif] font-medium leading-[1.3] text-[#333333] text-[15px] text-nowrap tracking-[0.15px] whitespace-pre">
              Gerar lote
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
