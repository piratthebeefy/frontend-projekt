import { parseISO, format } from 'date-fns';

type Props = {
    dateString: string;
};

// komponenta zodpovědná za zobrazení a formátování datumu
const DateFormatter = ({ dateString }: Props) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default DateFormatter;
