import { wrapper } from '../redux/store';
import { getRooms } from '../redux/actions/roomActions';
import HomeComponent from '../components/Home';
import Layout from '../components/layout/Layout';

export default function Home() {
    return (
        <Layout>
            <HomeComponent />
        </Layout>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ req, store }) => {
        await store.dispatch(getRooms(req));
    }
);
