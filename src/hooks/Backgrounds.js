import backgrounds from '../components/backgrounds/backgorunds.json';
import { useState } from 'react';

const Backgrounds = () => {

    const [background, setBackground] = useState('');
    const [color, setColor] = useState('');

    const backgroundSelect = (res) => {
        for (const property in backgrounds) {
            if (backgrounds[property].name === res.data.types[0].type?.name) {
                setBackground(backgrounds[property].background);
                setColor(backgrounds[property].color);
            };
        }
    };

    return { background, color, backgroundSelect };

};

export default Backgrounds;