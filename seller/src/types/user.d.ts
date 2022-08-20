declare global {
    interface SessionData {
        uid: string;
    }

    interface Artist {
        name: string;
        type: string;
        photo: string;
    }

    interface UserProfile {
        name: string;
        type: string;
        photo: string;
    }

    interface Message {
        title: string;
        content?: string;
    }

    interface Notification {
        title: string;
        content?: string;
    }
}

export {};
