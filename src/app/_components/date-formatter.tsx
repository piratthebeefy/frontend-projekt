import { parseISO, format } from 'date-fns';
import { cs } from 'date-fns/locale';

type Props = {
    dateString: string;
};

// komponenta zodpovědná za zobrazení a formátování datumu
const DateFormatter = ({ dateString }: Props) => {
    const date = parseISO(dateString);
    return (
        <time dateTime={dateString}>
            {format(date, 'do MMMM RRRR', { locale: cs })}
        </time>
    );
};

export default DateFormatter;
