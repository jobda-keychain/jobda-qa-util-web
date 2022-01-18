import { Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  ul: {
    '& .Mui-selected': {
      backgroundColor: '#00C17C',
      color: 'white',
    },
    justifyContent: 'center',
  },
}));

interface PaginationButtonProps {
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  page: number;
}

export default function StyledPagination({ count, page, onChange }: PaginationButtonProps) {
  const classes = useStyles();
  return <Pagination classes={{ ul: classes.ul }} count={count} page={page} onChange={onChange} />;
}
