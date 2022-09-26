import { NotificationBell } from './NotificationBell';
import { renderWithProvider } from "../../spec/helpers";

describe('NotificationBell test cases', () => {
  
 it('should render 32 notifications', async () => {
   renderWithProvider(<NotificationBell/>)
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelector(`[data-badge="32"]`)).toBeInTheDocument();
  });
});
