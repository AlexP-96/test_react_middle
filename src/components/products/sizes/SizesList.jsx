import {
    shallowEqual,
    useSelector,
} from 'react-redux';
import InputSize from './InputSize';
import { sizesListSelector } from '../../../toolkitRedux/selectors';
import { useMemo } from 'react';

const SizesList = ({ size }) => {
    const sizesList = useSelector(sizesListSelector, shallowEqual);

    if (!size || !sizesList.length) return null;

    return (
        <div className='wrapper__sizes'>
            <div className='aside__sizes'>
                {sizesList.map((_size) => (
                    <InputSize
                        key={_size.id}
                        availableId={_size.id}
                        label={_size.label}
                        nothing={size.includes(_size.id)}
                        number={_size.number}
                    />
                ))}
            </div>
        </div>
    );
};

export default SizesList;