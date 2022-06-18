import { useSelector } from "react-redux";

export function useComment() {
    const { comments, isLoading, userComments, error } = useSelector(state => state.comments);
    return {
        comments,
        isLoading,
        userComments,
        error
    }
}