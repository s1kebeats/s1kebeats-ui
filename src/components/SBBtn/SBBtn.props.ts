export default interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  uiType?: 'primary' | 'secondary' | 'subtle' | 'ghost';
  icon?: string | null;
  position?: 'left' | 'right';
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
