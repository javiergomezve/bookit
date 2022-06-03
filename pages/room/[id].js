import { wrapper } from '../../redux/store';
import { getRoomDetail } from '../../redux/actions/roomActions';
import RoomDetail from '../../components/room/RoomDetail';
import Layout from '../../components/layout/Layout';

export default function RoomDetailPage() {
    return (
        <Layout>
            <RoomDetail title="Room detail" />
        </Layout>
    );
}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ req, params, store }) => {
        await store.dispatch(getRoomDetail(req, params.id));
    }
);
