import { 
  createClient,
  LiveList,
  LiveMap,
  LiveObject,
} from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

import { Layer, Color } from "@/types/canvas";
  
const client = createClient({
  // throttle: 16,
  // authEndpoint: "/api/liveblocks-auth",
  publicApiKey:"pk_dev_6GArniWnpKDtSwOgoVcn3q-Kr5j_u1p8BfAmbMHnIBVlV931bIRBAYLn_98b-fts",
});

type Presence = {
  cursor: { x: number, y: number } | null,
  selection: string[];
  pencilDraft: [x: number, y: number, pressure: number][] | null;
  penColor: Color | null;
};

type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>;
  layerIds: LiveList<string>;
};

type UserMeta = {
  id?: string;
  info?: {
    name?: string;
    picture?: string;
  };
};

type RoomEvent = {

};

export type ThreadMetadata = {

};

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,

    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useUser,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
  }
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(client, {
  async resolveUsers({ userIds }) {
    return [];
  },
  async resolveMentionSuggestions({ text, roomId }) {    
    return [];
  },
});
