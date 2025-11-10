'use client';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      fontFamily: "'Franklin Gothic Book', 'Franklin Gothic Medium', 'Arial', sans-serif",
      background: '#fafafa'
    }}>
      <div style={{
        textAlign: 'left',
        maxWidth: '600px'
      }}>
        <div style={{
          color: '#ff0000',
          fontSize: '16px',
          marginBottom: '23pt',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          Under Construction
        </div>

        <h1 style={{
          fontSize: '16px',
          fontWeight: '400',
          color: '#000000',
          marginBottom: '23pt',
          lineHeight: '1.4'
        }}>
          Rindon Johnson
        </h1>

        <p style={{
          fontSize: '16px',
          marginBottom: '23pt'
        }}>
          <a 
            href="https://www.dropbox.com/scl/fi/oe3q5v7ytr5htjj9787go/rjohnson-portfolio-19-25-november25.pdf?rlkey=hmhsavngv6idrb3uz5ao98ujs&st=3syzafm3&dl=0" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#0066cc',
              textDecoration: 'none',
              borderBottom: '1px solid #0066cc',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Portfolio
          </a>
        </p>

        <p style={{
          fontSize: '16px'
        }}>
          <a 
            href="https://www.dropbox.com/scl/fi/7gszaelfhz39p7nscdocm/Johnson-CV-Works-Links.pdf?rlkey=qrfdfaypbp7hhqt1dno8az4pl&st=ilarwwb2&dl=0" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#0066cc',
              textDecoration: 'none',
              borderBottom: '1px solid #0066cc',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            CV
          </a>
        </p>
        <p style={{
          fontSize: '16px',
          marginTop: '23pt'
        }}>
          <a 
            href="mailto:rindonjohnsonstudio@protonmail.com"
            style={{
              color: '#0066cc',
              textDecoration: 'none',
              borderBottom: '1px solid #0066cc',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Contact
          </a>
        </p>
      </div>
    </div>
  );
}
