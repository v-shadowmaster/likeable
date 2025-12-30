"use client"
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const UnencryptedMessagesModal = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'flex-end',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: '#000',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 24,
          width: '100%',
          maxWidth: 400,
          margin: '0 auto',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Header with drag handle and chevron */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 4,
              opacity: 0.5,
            }}
          >
            <div
              style={{
                width: 3,
                height: 20,
                backgroundColor: '#888',
                borderRadius: 1.5,
              }}
            />
            <div
              style={{
                width: 3,
                height: 20,
                backgroundColor: '#888',
                borderRadius: 1.5,
              }}
            />
          </div>
          <div
            style={{
              fontSize: 16,
              color: '#888',
              lineHeight: 1,
            }}
          >
            ↑
          </div>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#fff',
            margin: 0,
            marginBottom: 8,
            lineHeight: 1.4,
          }}
        >
          Messages are unencrypted
        </h2>

        {/* Body text */}
        <p
          style={{
            fontSize: 16,
            color: '#ccc',
            margin: 0,
            marginBottom: 12,
            lineHeight: 1.5,
          }}
        >
          The person you’re messaging needs to register for encrypted messages in order to send and receive encrypted messages.
        </p>

        {/* Subtext */}
        <p
          style={{
            fontSize: 16,
            color: '#ccc',
            margin: 0,
            marginBottom: 24,
            lineHeight: 1.5,
          }}
        >
          Invite them to get set up.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: 12,
          }}
        >
          <button
            style={{
              flex: 1,
              padding: 12,
              backgroundColor: 'transparent',
              border: '1px solid #fff',
              borderRadius: 8,
              color: '#fff',
              fontSize: 16,
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onClick={() => {
              // Handle invite logic
              console.log('Invite clicked');
            }}
          >
            Invite
          </button>
          <button
            style={{
              flex: 1,
              padding: 12,
              backgroundColor: '#fff',
              borderRadius: 8,
              color: '#000',
              fontSize: 16,
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onClick={() => {
              // Handle dismiss logic
              console.log('Dismiss clicked');
            }}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <UnencryptedMessagesModal />
    </div>
  );
}
