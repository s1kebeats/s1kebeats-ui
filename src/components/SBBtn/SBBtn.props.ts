export default interface Props {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  designType?: 'primary' | 'secondary' | 'subtle' | 'ghost';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  icon?: string | null;
  position?: 'left' | 'right';
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
