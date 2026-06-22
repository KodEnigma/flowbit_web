import { ImageResponse } from 'next/og';

export const alt = 'Zoltraa — Smart Expense Tracking';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '90px',
          backgroundColor: '#0B0F19',
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(71,151,246,0.35), transparent 55%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: '#4797F6',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}
          >
            Zoltraa
          </div>
        </div>

        <div
          style={{
            fontSize: 66,
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            maxWidth: 880,
          }}
        >
          Smart expense tracking, without the spreadsheets
        </div>

        <div
          style={{
            fontSize: 26,
            color: '#9BA3B4',
            marginTop: 28,
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          Upload a bank statement, get instant spending insights. Your data is
          analyzed in-memory and never touches disk.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
