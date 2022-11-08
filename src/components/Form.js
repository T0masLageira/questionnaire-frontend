import './Form.css'
import Select from 'react-select'

export default function Form(props) {

    let questionId = 1;
    let questionString = "How big is your company?"
    const answers = [1, 2, 3, 4, 5];

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            placeholder: "Answer",
            padding: 20,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
        },
        menu: (provided, state) => ({
            width: 300,
        }),
        container: (provided, state) => ({
            width: 300,
        }),
    }

    return (
        <form className="Form" >
            <h1 className="font-weight-bold mb-5">Questionnaire</h1>
            <h2 className="font-weight-bold mt-1"> Question Number {questionId} </h2><br></br>
            {questionString}
            <Select styles={customStyles} options={options} />

        </form>
    )
}