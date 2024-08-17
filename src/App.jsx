import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'

import SupervisorIcon from '../public/images/IconSupervisor.svg' 
import KarmaIcon from '../public/images/IconKarma.svg'
import CalculatorIcon from '../public/images/IconCalculator.svg'
import TeamBuilderIcon from '../public/images/IconTeambuilder.svg'

function App() {
    const cards = [
        { title: 'Supervisor', description: 'Monitors activity to identify project roadblocks', icon: SupervisorIcon, color: '#00bfa6' },
        { title: 'Team Builder', description: 'Scans our talent network to create the optimal team for your project', icon: TeamBuilderIcon, color: '#ff6b6b' },
        { title: 'Karma', description: 'Regularly evaluates our talent to ensure quality', icon: KarmaIcon, color: '#f3c623' },
        { title: 'Calculator', description: 'Uses data from past projects to provide better delivery estimates', icon: CalculatorIcon, color: '#1c93d1' },
    ];

    return (
        <div className="app">
            <Header />
            <div className="cards">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                        color={card.color}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;