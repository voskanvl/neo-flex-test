import { Card } from './card/Card';
import { useStore } from 'effector-react';
import { data } from '../../../effector';
import { Group } from './group/Group';
export const Catalog = () => {
    const headphones = useStore(data.$data);
    return (
        <>
            <Group title={'наушники'}>
                {headphones
                    .filter(headphone => !headphone.wireless)
                    .map(headphone => (
                        <Card {...headphone} key={headphone.id} />
                    ))}
            </Group>
            <Group title={'Беспроводные наушники'}>
                {headphones
                    .filter(headphone => headphone.wireless)
                    .map(headphone => (
                        <Card {...headphone} key={headphone.id} />
                    ))}
            </Group>
        </>
    );
};
