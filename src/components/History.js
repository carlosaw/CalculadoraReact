import { useStateValue } from '../contexts/StateContext';

export default () => {
    const [state, dispatch] = useStateValue();

    return (
        <div className={`box scrolled`}>
            Histórico de contas:
            <div>
                {state.calc.history.map((item, index)=>(
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};