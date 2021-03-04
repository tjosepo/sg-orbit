import { isNil } from "lodash";
import { useId as useAutoId } from "@reach/auto-id";

// This utility will initially trigger a re-render.
export function useId(userId: string, prefix?: string): string {
    const uuid = useAutoId(userId);

    return !isNil(prefix) ? `${prefix}-${uuid}` : uuid;
}