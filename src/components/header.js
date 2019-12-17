import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const easeInOutQuad = `cubic-bezier(0.455, 0.030, 0.515, 0.955);`;

const neonGlow = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(255,255,255,.8),
                 0 0 20px rgba(255,255,255,.8),
                 0 0 22px  rgba(255,255,255,.8),
                 0 0 40px  rgba(66,220,219,.8),
                 0 0 60px  rgba(66,220,219,.8),
                 0 0 80px  rgba(66,220,219,.5),
                 0 0 100px rgba(66,220,219,.5),
                 0 0 140px rgba(66,220,219,.5),
                 0 0 200px rgba(66,220,219,.5);
  }
  100% {
    text-shadow: 0 0 2px rgba(255,255,255,.8),
                 0 0 8px rgba(255,255,255,.8),
                 0 0 10px rgba(255,255,255,.8),
                 0 0 20px rgba(66,220,219,.8),
                 0 0 30px rgba(66,220,219,.8),
                 0 0 40px rgba(66,220,219,.8),
                 0 0 50px rgba(66,220,219,.5),
                 0 0 80px rgba(66,220,219,.5);
  }
}
`

const Title = styled.div`
  animation: ${neonGlow} 2s infinite alternate ${easeInOutQuad};
`

const Header = () => {
  return (
    <div>

    </div>
  );
};

export default Header;