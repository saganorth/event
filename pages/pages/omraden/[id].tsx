
import { GetServerSideProps, NextPage } from 'next';
import { Omrade } from '../../models/omrade';
import EventDetail from '../../component/EventDeatil';


type Props = {
 omrade: Omrade;
};

const OmradePage: NextPage<Props> = ({ omrade }) => {
  return <EventDetail omrade={omrade} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    console.log(context); 
    const { params } = context;
  
    if (!params || !params.id) { 
      return {
        notFound: true,
      };
    }
  
    const res = await fetch(`http://localhost:3000/api/omraden/${params.id}`);
    if (!res.ok) {
      return {
        notFound: true,
      };
    }
  
    const omrade:  Omrade = await res.json();
  
    return {
      props: {
        omrade,
      },
    };
  };
  
export default OmradePage;
