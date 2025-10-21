import { useState } from 'react';
import ConveniosLotesLista from './imports/ConveniosLotesLista';
import NovoLoteInteractive from './components/NovoLoteInteractive';

export default function App() {
  const [currentView, setCurrentView] = useState<'lista' | 'novo-lote'>('lista');

  const handleNovoLoteClick = () => {
    setCurrentView('novo-lote');
  };

  const handleBackToLista = () => {
    setCurrentView('lista');
  };

  return (
    <div className="w-full h-screen">
      {currentView === 'lista' ? (
        <ConveniosLotesLista onNovoLoteClick={handleNovoLoteClick} />
      ) : (
        <NovoLoteInteractive onBack={handleBackToLista} />
      )}
    </div>
  );
}
