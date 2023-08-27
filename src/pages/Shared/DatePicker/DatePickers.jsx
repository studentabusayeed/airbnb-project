import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import DatePicker from 'react-datepicker';
import './DatePicker.css';

function DatePickers() {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <section className='z-10'>
            <div className="form-outline datepicker flex">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    className="form-control w-1/2"
                    id="exampleDatepicker12"
                    data-mdb-toggle="datepicker"
                    placeholderText='Add Dates'
                />
            </div>
        </section>
    );
};

export default DatePickers;