import { useRouter } from "next/router";
import Post from "components/Blog/Post";

export default function PostId() {
    const router = useRouter();
    const { id } = router.query;

    return <Post id={id} />;
}
